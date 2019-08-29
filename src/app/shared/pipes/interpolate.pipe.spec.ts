import { InterpolatePipe } from './interpolate.pipe';

fdescribe('InterpolatePipe', () => {
  let pipe = null;

  beforeEach(() => {
    pipe = new InterpolatePipe();
  });

  it('should not change plain message', () => {
    const pipeResult = pipe.transform('Plain message', {a: 'b'});
    expect(pipeResult).toEqual('Plain message');
  });

  it('should ignore misnamed arguments', () => {
    const pipeResult = pipe.transform('Plain message { g } test', {a: 'b'});
    expect(pipeResult).toEqual('Plain message { g } test');
  });

  it('should properly interpolate correct arguments', () => {
    const pipeResult = pipe.transform('Plain message { key } test', {key: 'for'});
    expect(pipeResult).toEqual('Plain message for test');
  });

  it('should not care about white spaces in the next to variables', () => {
    const pipeResult = pipe.transform('Plain message { a} {b } {c} {  d   } test', {
      a: 'for',
      b: 'for',
      c: 'for',
      d: 'for',
    });
    expect(pipeResult).toEqual('Plain message for for for for test');
  });
});

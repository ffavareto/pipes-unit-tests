import { HumanizeBooleanPipe } from './humanize-boolean.pipe';

describe('HumanizeBooleanPipe', () => {
  
  describe('default case', () => {
    it('should transform to "Sim"', () => {
      const pipe = new HumanizeBooleanPipe();
      expect(pipe.transform(true)).toBe('Sim');
    });

    it('should transform to "Não"', () => {
      const pipe = new HumanizeBooleanPipe();
      expect(pipe.transform(false)).toBe('Não');
    });
  });

  describe('not capitalize case', () => {
    it('should transform to "sim"', () => {
      const pipe = new HumanizeBooleanPipe();
      expect(pipe.transform(true, false)).toBe('sim');
    });

    it('should transform to "não"', () => {
      const pipe = new HumanizeBooleanPipe();
      expect(pipe.transform(false, false)).toBe('não');
    });
  });

  
  describe('capitalize case', () => {
    it('should transform to "Sim"', () => {
      const pipe = new HumanizeBooleanPipe();
      expect(pipe.transform(true, true)).toBe('Sim');
    });

    it('should transform to "Não"', () => {
      const pipe = new HumanizeBooleanPipe();
      expect(pipe.transform(false, true)).toBe('Não');
    });
  });
});

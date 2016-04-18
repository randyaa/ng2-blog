import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Ng2BlogApp} from '../app/ng2-blog';

beforeEachProviders(() => [Ng2BlogApp]);

describe('App: Ng2Blog', () => {
  it('should have the `defaultMeaning` as 42', inject([Ng2BlogApp], (app: Ng2BlogApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Ng2BlogApp], (app: Ng2BlogApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});


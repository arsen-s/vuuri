import { describe, test, expect, vi } from 'vitest';
import vuuri from '@/Vuuri.vue';
import { assert, mount } from '@test/utils';

vi.mock('muuri', async () => {
  return await import('../__mocks__/muuri.js');
});

describe('Props', () => {
  describe('prop className', () => {
    test('should add className to vuuri container', async () => {
      const className = 'my-something-class';
      const wrapper = mount(vuuri, {
        props: {
          className
        }
      });

      const grid = wrapper.find('> div.muuri-grid');

      await assert(() => {
        expect(grid.classes()).toContain(className);
      });
    });
  });

  describe('prop options', () => {
    test('should add options to muuriOptions', async () => {
      const options = {};
      const wrapper = mount(vuuri, {
        props: {
          options: {
            items: '.items'
          }
        }
      });

      await assert(() => {
        expect(wrapper.vm.muuriOptions).toMatchObject(options);
      });
    });
  });

  describe('prop getItemWidth', () => {
    test('should be called to add width on muuri item', async () => {
      const width = `5px`;
      const wrapper = mount(vuuri, {
        props: {
          modelValue: [
            {}
          ],
          getItemWidth: () => width
        }
      });

      await assert(() => {
        expect(wrapper.find('[test-id="muuri-grid-item"]').attributes('style')).toContain(`width: ${width};`);
      });
    });
  });

  describe('prop getItemHeight', () => {
    test('should be called to add width on muuri item', async () => {
      const height = `5px`;
      const wrapper = mount(vuuri, {
        props: {
          modelValue: [
            {}
          ],
          getItemHeight: () => height
        }
      });

      await assert(() => {
        expect(wrapper.find('[test-id="muuri-grid-item"]').attributes('style')).toContain(`height: ${height};`);
      });
    });
  });
});

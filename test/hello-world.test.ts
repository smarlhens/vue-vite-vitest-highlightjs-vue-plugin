import hljsVuePlugin from '@highlightjs/vue-plugin';
import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import HelloWorld from '../src/components/hello-world.vue';

describe('HelloWorld', () => {
    let wrapper: RenderResult;

    afterEach(() => {
        wrapper.unmount();
    });

    beforeEach(() => {
        wrapper = render(HelloWorld, {
            global: {
                plugins: [hljsVuePlugin]
            }
        });
    });

    it('should render', () => {
        const { html, getByText } = wrapper;
        getByText('HelloWorld');
        getByText('foo');
        getByText('bar');
        expect(html()).toMatchSnapshot();
    });
});

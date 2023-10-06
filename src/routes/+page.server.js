import { superValidate } from 'sveltekit-superforms/server';
import { schema } from './schema';
import { fail } from '@sveltejs/kit';

export function load() {
	return { form: superValidate(schema) };
}

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, schema);
		if (!form.valid) return fail(400, { form });

		return { form };
	}
};

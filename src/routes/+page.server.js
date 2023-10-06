import { superValidate } from 'sveltekit-superforms/server';
import { schema } from './schema';

export function load() {
	return { form: superValidate(schema) };
}

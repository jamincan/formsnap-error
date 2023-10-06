<script>
	import { Form } from 'formsnap';
	import { schema } from './schema';

	export let data;
</script>

<Form.Root form={data.form} {schema} let:config>
	<Form.Field {config} name="email">
		<Form.Label>Email</Form.Label>
		<Form.Input />
		<Form.Validation />
	</Form.Field>
    <button type="submit">Submit</button>
</Form.Root>

<style>
	:global(input[data-fs-error]) {
		background-color: red;
	}
</style>

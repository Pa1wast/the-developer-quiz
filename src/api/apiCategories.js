import supabase from './supabase';

export async function getCategories() {
	const { data: categories, error } = await supabase
		.from('categories')
		.select('*')
		.order('id', { ascending: true });

	if (error) console.log(`Error: ${error}`);

	return categories;
}

export async function getCategory(id) {
	const { data: category, error } = await supabase
		.from('categories')
		.select()
		.eq('id', id);

	if (error) console.log(`Error: ${error}`);

	return category;
}

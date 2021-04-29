// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
	event.remove({ output: 'thermal:copper_ingot' })



	event.shaped('1x kubejs:uni_block', [
		'SSS',
		'SSS',
		'SSS'
	], {
		S: 'kubejs:uni_ingot',
	})

	event.shaped('1x kubejs:uni_ingot', [
		'SSS',
		'SSS',
		'SSS'
	], {
		S: 'kubejs:uni_nugget',
	})

	event.shaped('1x create:andesite_alloy',[
		'SE ',
		'ES ',
		'   '
	], { S: 'kubejs:uni_nugget', E: 'minecraft:andesite' })

	event.shapeless('9x kubejs:uni_nugget', ['1x kubejs:uni_ingot'])
	event.shapeless('9x kubejs:uni_ingot', ['1x kubejs:uni_block'])

	event.recipes.create.crushing([
		'kubejs:uni_crushed',
		item.of('2x kubejs:uni_crushed').withChance(0.3),
		item.of('minecraft:cobblestone').withChance(0.12)
		], 'kubejs:uni_ore')

	event.recipes.create.splashing([
		'10x kubejs:uni_nugget',
		item.of('5x kubejs:uni_nugget').withChance(0.5)
	], 'kubejs:uni_crushed')

	event.recipes.create.mixing('create:andesite_alloy', [
		'1x minecraft:andesite', '1x kubejs:uni_nugget'])

})


onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')

	event.removeAll('forge:ingots/copper')
	event.add('forge:ingots/copper', 'create:copper_ingot')

})
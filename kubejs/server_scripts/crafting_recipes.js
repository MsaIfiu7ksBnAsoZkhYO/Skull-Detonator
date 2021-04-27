// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
	event.remove({output: 'thermal:copper_ingot'})
	

	
	event.shaped('5x kubejs:cock_block', [
		'SSS',
		'SES',
		'SSS'
	  ], {
		S: 'kubejs:dragon_dildo',
		E: 'minecraft:apple'
	  })

	event.shaped('minecraft:cobblestone', [
		'SSS',
		'   ',
		' S '
	  ], {
		S: '#minecraft:wool'
	  })

	

})


onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')

	event.removeAll('forge:ingots/copper')
	event.add('forge:ingots/copper', 'create:copper_ingot')

})
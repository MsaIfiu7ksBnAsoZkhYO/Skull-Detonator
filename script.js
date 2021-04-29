// priority: 0

console.info('Hello, Bitch!')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')

	//Unifaction Ingot and related items
	event.create('uni_ingot').displayName('Unifact Ingot')
	event.create('uni_crushed').displayName('Crushed Unifaction Ore')
	event.create('uni_nugget').displayName('Unifact Nugget')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')

	//Unifaciton block items
	event.create('uni_ore').material('stone').hardness(5.0).displayName('Unifaction Ore')
	event.create('uni_block').material('iron').hardness(5.0).displayName('Block of Unifact')

})

onEvent('worldgen.add', event => {
	//This is where I put the worldgen for the Uni ore so you could get it in game

	//unifaction ore stats
	event.addOre(ore => {

		ore.block = 'kubejs:uni_ore'
		ore.spawnsIn.blacklist = true
		ore.spawnsIn.values = [
			'#minecraft:base_stone_overworld'
		]

		ore.clusterMinSize = 5 // this doesn't function but when it does we wont have to add it
		ore.clusterMaxSize = 7
		ore.clusterCount = 20
		ore.minHeight = 0
		ore.maxHeight = 60
		ore.squared = true


	})


})
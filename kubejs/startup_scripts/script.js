// priority: 0

console.info('Hello, Bitch!')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	event.create('dragon_dildo').displayName('12 foot dragon dildo')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
	event.create('jock_block').material('wood').hardness(1.0).displayName('Jock Block')
	
	event
		.create('cock_block')
		.material('wood')
		.hardness(1.0)
		.displayName('Cock Block')

})
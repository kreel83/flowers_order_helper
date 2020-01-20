const search = () => {
	$('#fleur').on("keyup",function() {
		const fleur = $(this).val()
		console.log(fleur)
		$('.card').attr('hidden', true)

		$('.card-header:contains('+fleur+')').parent().attr('hidden', false)

	})
}

const select = () => {
	$('.card').click(function() {
		let fleurs = $('#fleurs').val()
		fleurs = fleurs.split('/')
		fleurs.push($(this).attr('data-id'))
		$('#fleurs').val(fleurs.join('/')) 
		$('#fleur').val('')
		$('.card').attr('hidden',false)
		$('.selection').append("<div class='tag' >"+$(this).attr('data-name')+'</div>')
	})
}

export { search, select }
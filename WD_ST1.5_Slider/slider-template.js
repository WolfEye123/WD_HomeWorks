const API_URL = 'https://picsum.photos/';
const BIG_SIZE = '600/400';
const SMALL_SIZE = '60';

const IMAGES = [
	'?image=1080',
	'?image=1079',
	'?image=1069',
	'?image=1063',
	'?image=1050',
	'?image=1039'
];

$(document).ready(() => {
	const li = '<li></li>';
	const sliderCurrent = $('.slider-current');
	const sliderPreviews = $('.slider-previews');

	IMAGES.map((image) => {
		sliderPreviews.append($(li).html(`<a class="slider-image" data-value="${image}">
																						<img src="${API_URL + SMALL_SIZE + image}" alt="img"></a>`));
	});

	/**
	 * change the current slide by pressing the previews
	 */
	$('.slider-image').click(function () {
		let href = $(this).data('value');
		href = API_URL + BIG_SIZE + href;
		sliderCurrent.children().attr('src', href);
	});

	/**
	 * change the current slide by pressing the arrows on the keyboard
	 */
	$(document).keydown(function (e) {
		const src = sliderCurrent.children().attr('src').split('?');
		let index = IMAGES.findIndex(item => item === '?' + src[1]);
		if (e.keyCode === 37) {
			if (index === 0) {
				index = IMAGES.length;
			}
			sliderCurrent.children().attr('src', src[0] + IMAGES[--index]);
		}
		if (e.keyCode === 39) {
			if (index === IMAGES.length - 1) {
				index = -1;
			}
			sliderCurrent.children().attr('src', src[0] + IMAGES[++index]);
		}
	})

});

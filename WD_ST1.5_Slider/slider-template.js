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

	IMAGES.map((image, index) => {
		sliderPreviews.append($(li).addClass('.slider .slider-previews').attr('id',index).attr('data-value', `${image}`)
			.html(`<a class="slider-image"><img src="${API_URL + SMALL_SIZE + image}" alt="img"></a>`));
		if (index === 0) {
			$('#0').addClass('current');
		}
	});

	/**
	 * change the current slide by pressing the previews
	 */
	$('li').click(function () {
		$('li.current').removeClass('current');
		$(this).addClass('current');
		let href = $(this).data('value');
		href = API_URL + BIG_SIZE + href;
		sliderCurrent.children().attr('src', href);
	});

	/**
	 * change the current slide by pressing the arrows on the keyboard
	 */
	$(document).keydown(function (e) {
		$('li.current').removeClass('current');
		const src = sliderCurrent.children().attr('src').split('?');
		let index = IMAGES.findIndex(item => item === '?' + src[1]);
		if (e.keyCode === 37) {
			if (index === 0) {
				index = IMAGES.length;
			}
			sliderCurrent.children().attr('src', src[0] + IMAGES[--index]);
			const currentIndex = '#' + index;
			$(`${currentIndex}`).addClass('current');
		}
		if (e.keyCode === 39) {
			if (index === IMAGES.length - 1) {
				index = -1;
			}
			sliderCurrent.children().attr('src', src[0] + IMAGES[++index]);
			const currentIndex = '#' + index;
			$(`${currentIndex}`).addClass('current');
		}
	})

});

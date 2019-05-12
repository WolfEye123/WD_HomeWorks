$(document).ready(() => {
	const chatWindow = $('#chat_window');

	/**
	 *
	 */
	setChat(MESSAGES);

	setInterval(function () {
		$.ajax({
			type: 'POST',
			url: "http://localhost/WD_HomeWorks/WD_PS5_AJAX/resources/php/chatRefresh.php",
			data: {},
			error: function (data) {
				alert(data);
			},
			success: function (data) {
				setChat(data);
				chatWindow.scrollTop(chatWindow[0].scrollHeight);
			}
		});
	}, 5000);

	/**
	 *
	 */
	function setChat(NEW_MESSAGES) {
		console.log(NEW_MESSAGES);
		console.log(NEW_MESSAGES.messages);
		const messages = NEW_MESSAGES.messages;
		for (let i = 0; i < messages.length; i++) {
			const message = setStringToSmileAndFrown(messages[i].message);
			const time = messages[i].messageTime;
			const user = messages[i].messageFrom;
			const div = document.createElement('div');
			chatWindow.append($(div).addClass('messageStyle').html(`[${time}] <b>${user}:</b> ${message}`));
		}
		chatWindow.scrollTop(chatWindow[0].scrollHeight);
	}

	/**
	 *
	 */
	$('#sendMessage').on('click', function (e) {
		return ajaxInAction(e);
	});

	/**
	 *
	 */
	$("#message").on('keyup', function (e) {
		if (e.keyCode == 13) {
			return ajaxInAction(e);
		}
	});

	/**
	 *
	 * @param e
	 * @returns {boolean}
	 */
	function ajaxInAction(e) {
		e.preventDefault();
		let message = $('#message').val();

		if (!message) {
			return false;
		}

		message = setStringToSmileAndFrown(message);

		$.ajax({
			type: 'POST',
			url: "http://localhost/WD_HomeWorks/WD_PS5_AJAX/resources/php/chat.php",
			data: {
				'message': message
			},
			error: function (data) {
				alert(data);
			},
			success: function (data) {
				chatWindow.append(
					`<div class="messageStyle">
								[${data.messageTime}] 
								<b>${data.messageFrom}:</b> 
								${data.message}
							</div>`);
				$('#message')[0].value = '';
				chatWindow.scrollTop(chatWindow[0].scrollHeight);
			}
		});
	}

	/**
	 *
	 * @param message
	 * @returns {string}
	 */
	function setStringToSmileAndFrown(message) {
		const smileRegex = new RegExp(/:\)/, 'gi');
		const frownRegex = new RegExp(/:\(/, 'gi');
		message = message.replace(smileRegex, '<i class="far fa-smile"></i>');
		message = message.replace(frownRegex, '<i class="far fa-frown-open"></i>');
		return message;
	}
});

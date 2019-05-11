$(document).ready(() => {
	const chatScope = $('#chat_window');

	/**
	 *
	 */
	setChat();

	function setStringToSmileAndFrown(message) {
		const smileRegex = new RegExp(/:\)/, 'gi');
		const frownRegex = new RegExp(/:\(/, 'gi');
		message = message.replace(smileRegex, '<i class="far fa-smile"></i>');
		message = message.replace(frownRegex, '<i class="far fa-frown-open"></i>');
		return message;
	}

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
				chatScope.append(
					`<div class="messageStyle">
								[${data.messageTime}] 
								<b>${data.messageFrom}:</b> 
								${data.message}
							</div>`);
				$('#message')[0].value = '';
				chatScope.scrollTop(chatScope[0].scrollHeight);
			}
		});
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
	function setChat() {
		const messages = MESSAGES.messages;

		for (let i = 0; i < messages.length; i++) {
			let message = messages[i].message;
			message = setStringToSmileAndFrown(message);
			chatScope.append(
				`<div class="messageStyle">
								[${messages[i].messageTime}] 
								<b>${messages[i].messageFrom}:</b> 
								${message}
							</div>`);
		}
		chatScope.scrollTop(chatScope[0].scrollHeight);
	}

	/**
	 *
	 */
	$("#message").on('keyup', function (e) {
		if (e.keyCode == 13) {
			return ajaxInAction(e);
		}
	});
});

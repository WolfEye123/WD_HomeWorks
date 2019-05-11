$(document).ready(() => {
	const chatScope = $("#chat_window");

	/**
	 *
	 */
	setChat();

	/**
	 *
	 * @returns {{messageTime: string, messageDate: string}}
	 */
	function getDate() {
		const date = new Date;
		const seconds = date.getSeconds() + "";
		const minutes = date.getMinutes() + "";
		const hours = date.getHours() + "";
		const days = date.getDay() + "";
		const months = date.getMonth() + "";
		const years = date.getFullYear() + "";
		const messageDate = years + "." +
			(months.length === 1 ? "0" + months : months) + "." +
			(days.length === 1 ? "0" + days : days);
		const messageTime =
			(hours.length === 1 ? "0" + hours : hours) + ";" +
			(minutes.length === 1 ? "0" + minutes : minutes) + ";" +
			(seconds.length === 1 ? "0" + seconds : seconds);
		return {messageDate, messageTime};
	}

	function setStringToSmileAndFrown(message) {
		const smileRegex = new RegExp(/:\)/, "gi");
		const frownRegex = new RegExp(/:\(/, "gi");
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
		let message = $("#message").val();
		const userName = user;

		if (!message) {
			return false;
		}

		const {messageDate, messageTime} = getDate();
		message = setStringToSmileAndFrown(message);

		$.ajax({
			type: "POST",
			url: "http://localhost/WD_HomeWorks/WD_PS5_AJAX/resources/php/chat.php",
			data: {
				"post": "1",
				"messageDate": messageDate,
				"messageTime": messageTime,
				"messageFrom": userName,
				"message": message
			},
			success: function (data) {
				console.log(data["message"]);
				data = data.split(">");
				const messageDate = data[1].split("[")[0].trim();
				const messageTime = data[2].split("[")[0].replace(/;/g, ":").trim();
				const messageFrom = data[3].split("[")[0].replace(/"/g, "").trim();
				let message = data[4].substring(0,data[4].length - 2).trim();

				chatScope.append(
					`<div class="messageStyle">
								[${messageTime}] 
								<b>${messageFrom}:</b> 
								${message}
							</div>`);
				$("#message")[0].value = "";
				chatScope.scrollTop(chatScope[0].scrollHeight);
			}
		});
	}

	/**
	 *
	 */
	$("#sendMessage").on("click",function (e) {
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
								[${messages[i].messageTime.replace(/;/g,":")}] 
								<b>${messages[i].messageFrom}:</b> 
								${message}
							</div>`);
		}
		chatScope.scrollTop(chatScope[0].scrollHeight);
	}

	/**
	 *
	 */
	$("#message").on("keyup", function (e) {
		if (e.keyCode == 13) {
			return ajaxInAction(e);
		}
	});
});

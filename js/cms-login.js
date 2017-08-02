jQuery(document).ready(function($) {
	/* 点击“登录”按钮 */
	$(".enter-button").click(function(event) {
		event.preventDefault();
		/* 这里放一个判断语句，用来判断用户名和密码是否输入正确 */

		/* 如果输入不正确，则显示错误信息 */
		$(".warning-info").css("display", "block");
	});
});
<?php
if (!isset($current) || empty($current)){
	$current = '';	// N/A
}
?>
<header class="header js-menu-parent" id="header" role="banner">
	<div class="header_wrapper">
		<?php
			$html = '<h1 id="logo" class="logo_site"><a href="/"><img src="/common/images/sitelogo.png" alt="Lightning review"></a></h1>';
			if($current == 'home'){
				echo('<h1 id="sitelogo">' . $html . '</h1>');
			}else{
				echo('<p id="sitelogo">' . $html . '</p>');
			}
		?>	
		<p class="header__menu js-menu-trigger"><a href="#nav-global" class="js-menu noScroll"><span></span><span></span><span></span></a></p>		
	</div>

	
	
<!-- top header -->
<div class="header-top">
	<div class="header-top-area">

		
		
			
			
			<div class="navbar-top-main">
					
					
					<nav class="nav-global js-menu-content" id="nav-global">
						<div class="nav-global_inner">
							<div class="header-top-left">
							<ul id="menu" class="menu_main nav">
							 　 	<li class="visible-sp"><a href="/">トップページ</a></li>
								<li class="dropdown-mb">
									<a href="#">コンセプト</a>
									<div class="dropdown-mb-sub">
										<ul>
											<li><a href="#">誰でも簡単に、毎日のレビューをやり切れる</a></li>
											<li><a href="#">現場の資産を活かせる</a></li>
											<li><a href="#">改善ポイントが素早く見つけられる</a></li>
											<li><a href="#">様々な現場のレビューを幅広く支援</a></li>
										</ul>
									</div>
								</li>
								<li><a href="#">特長</a></li>
								<li><a href="#">導入効果</a></li>
								<li><a href="#">ご購入について</a></li>
								<li><a href="#">動作環境</a></li>
								<li><a href="#">お問い合わせ</a></li>
								
							</ul>
							<ul class="menu_top nav">
								<li><a href="#">ニュース</a></li>
								<li><a href="#">サポート</a></li>
								<li><a href="#">製品紹介セミナー</a></li>
								<li><a href="#">ログイン</a></li>
								
							</ul>	
							</div>
							<div class="header-top-right">
								<div class="bottom-gd1-active">
												
									<a class="stick-title">
										<span class="stick-title-inner">
											<span>評価版ダウンロード <i class="fas fa-arrow-right"></i></span>	
										</span>
									</a>
									<a class="stick-title">
										<span class="stick-title-inner">
											<span>お見積もり <i class="fas fa-arrow-right"></i></span>	
										</span>
									</a>
								</div>
								
							</div>
						</div>
					</nav>
					<div class="clear"></div>
			</div>
		
	
	
	</div>

</div>



<!-- //top header -->	
</header>
<div class="clear"></div>

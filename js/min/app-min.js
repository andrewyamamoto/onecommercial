$(document).ready(function(){function t(){var t=$(this),n=t.find(".modal-dialog");t.css("display","block"),n.css("margin-top",Math.max(0,($(window).height()-n.height())/2))}function n(t,n){var o=$(t).serialize();$.ajax({type:"POST",url:"/process.php",data:$(t).serialize(),success:function(t){$(n).modal("hide")},error:function(){alert("failure")}})}$("body").scrollspy({target:"#navbar",offset:101}),$(".navbar-nav li a").click(function(t){$(".navbar-collapse").collapse("hide")}),$(".modal").on("show.bs.modal",t),$(window).on("resize",function(){$(".modal:visible").each(t)}),$("button#submit-nobae1").click(function(t){t.preventDefault(),n("form.nobae1","#asseteval")}),$("button#submit-cfnsp").click(function(t){t.preventDefault(),n("form.cfnsp","#syndicationproject")}),$("button#submit-rdw").click(function(t){t.preventDefault(),n("form.rdw","#productdeal")}),$("button#submit-nobae2").click(function(t){t.preventDefault(),n("form.nobae2","#assetevalsellers")}),$("button#submit-omv").click(function(t){t.preventDefault(),n("form.omv","#offmarket")}),$("button#submit-mfg").click(function(t){t.preventDefault(),n("form.mfg","#multigoals")})});
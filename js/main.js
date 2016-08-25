;
$(document).ready(function(){   
        		$('#search_input').on('keyup',function(){
        			$.ajax({
        				type: 'GET',
        				url:'http://api.bing.com/qsonhs.aspx?type=cb&cb=a&q='+$(this).val(),
        				dataType:'jsonp',
        				jsonp:'cb',
        				success: function(msg){
        					var ons = msg.AS.Results[0].Suggests;
        					html = '';
        					for(var i=0;i<ons.length;i++){
        						html += '<li><a target="_blank" href='+ ons[i].Url +'>'+ons[i].Txt+'</a></li>';
        					}
        					$('#search_result').html(html);
        					$('#search_suggest').show().css({
        						top:$('#search_form').offset().top+$('#search_form').height()+10,
        						left:$('#search_form').offset().left,
        						position:'absolute',
        					});

        				},

        			})
        		})
        	})
	



	

		 

		 	



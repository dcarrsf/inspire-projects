/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "scroll", function(sym, e) {
         // Map scroll position to timeline position
         var animationWidth = 3072;
         var stageWidth = sym.$("Stage").width();
         var scrollPos = sym.$("Stage").scrollLeft();
         var duration = sym.getDuration();
         var percent = scrollPos / (animationWidth - stageWidth);
         var time = duration * percent;
         
         // Update timeline
         sym.stop(time);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("INSPIRE").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // Load JavaScript files to start
         
         yepnope({
         
          	nope:[
          		'jquery.mousewheel.js'
          	],
          	complete: init
         });
         
         // Fire init function when yepnope has loaded the files
         
         function init (){
         
         	// Hide vertical scrollbar
         	sym.$("Stage").css("overflow-y","hidden");
         
         	// Simple mousewheel scroll
         	/*
         	sym.$("Stage").mousewheel(function(event, delta) {
         
         		this.scrollLeft -= (delta * 5);
         		event.preventDefault();
         	});	*/
         	
         	// Animated mousewheel scroll
         	var animating = false;
         	var distance = 600;
         	var duration = 1000;
         
         	$("body").mousewheel(function(event, delta) {
         		
         		if( animating == false ){
         			 animating = true;
         			
         			var left = $("#Stage").scrollLeft();
         			var position = ( delta < 0 ? left + distance : left - distance );
         			
         			$("#Stage").animate({scrollLeft: position}, duration, function(){
         				animating = false;
         			});
         			console.log("position = "+position);
         		}
         		event.preventDefault();
         	});
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'INSPIRE'
   (function(symbolName) {   
   
   })("INSPIRE");
   //Edge symbol end:'INSPIRE'

})(jQuery, AdobeEdge, "EDGE-116100704");
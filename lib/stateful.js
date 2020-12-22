//stateful.js adds support for back button and linking to specific scenes to Hype prototypes

function updateSceneFromHash(){
	var hash = window.location.hash;
	var sceneName=hash.replace('#','');
	var hypeDocument = HYPE.documents['index'];
	if(hash.length == 0){
		sceneName = hypeDocument.sceneNames()[0];
	}
	if(sceneName != hypeDocument.currentSceneName() ){
		hypeDocument.showSceneNamed(sceneName, hypeDocument.kSceneTransitionInstant);
	}
}

//Updates the scene when the hash changes (Does not update on initial hash value)
$(window).bind( 'hashchange', function(e) {
	updateSceneFromHash();

});


//Updates the scene based on the initial value of the hash (hack to make sure HYPE variable is available).
$(window).load(function (){
    var i = setInterval(function (){
        if ($('#index_hype_container').length){
            clearInterval(i);
   			updateSceneFromHash();
    	}
    }, 100);
});


//History support:
// Back button triggers scene changes.
jQuery(document).ready(function($) {
	if (window.history && window.history.pushState) {
		$(window).on('popstate', function() {
			updateSceneFromHash();
		});
	}
});

//Function to indicate which transitions get into the history stack
function updateState(){ //Should be called AFTER jumping to the scene.
	var hypeDocument = HYPE.documents['index']
	var sceneName = hypeDocument.currentSceneName();
	window.history.pushState('forward', null, '#'+sceneName);
}

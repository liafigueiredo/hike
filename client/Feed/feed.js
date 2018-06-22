Template.Feed.events({
  "submit form": function(evento, template) {
    evento.preventDefault();
    var textForm = evento.target.texto.value;
    console.log(textForm);
    Posts.insert({
      texto: textForm
    });
    evento.target.texto.value = "";
    }
});

Template.Feed.helpers({
	posts: function() {
		var CollectionPosts = Posts.find().fetch();
		return CollectionPosts;
	}

});
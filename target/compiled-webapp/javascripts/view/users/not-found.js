define(["backbone","tpl!app/template/users/404","i18n!app/nls/globalization","marionette"],function(Backbone,notFoundTemplate,i18n){return Backbone.Marionette.ItemView.extend({template:function(){return notFoundTemplate(i18n)}})});
sap.designstudio.sdk.PropertyPage.subclass("com.iprosis.horizontalscroller",  function() {

	var that = this;

	this.init = function() {
		$("#form").submit(function() {
			that.firePropertiesChanged([""]);
			return false;
		});
	};
});
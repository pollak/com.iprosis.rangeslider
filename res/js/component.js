sap.designstudio.sdk.Component.subclass("com.iprosis.rangeslider.RangeSlider", function() {  
	var that = this;  
    var sValue1 = null, sValue2 = null, min = null, max = null, dValue1 = null, dValue2 = null, tNumber = null;
    this._alive = false;  
    this._sl = null;
    this._defaultSet = false;
    
    this.init = function() {  
	    if (this._alive) {  
	    	this._sl.placeAt(this.$());  
	    	return;  
	    } else {  
	    	var oSlider = new sap.ui.commons.RangeSlider({  
	    		id : 'RangeSlider',  
	    		tooltip: 'RangeSlider',  
	    		width: '90%',  	    		  
	    		totalUnits: 10,
	    		value: 0,
	    		value2: 10,
	    		smallStepWidth: 1,  
	    		stepLabels : true,  
	    		change : function() {  
		        			sValue1 = oSlider.getValue(); 
		        			sValue2 = oSlider.getValue2();
		        			that.firePropertiesChanged(["SValue1"]);
		        			that.firePropertiesChanged(["SValue2"]);
		        			that.fireEvent("onChange");  
	        			}  
	    	});
	    	
	    	oSlider.placeAt(this.$());  
	    	this._sl = oSlider;
	    	this._alive = true;

	    };
    };
    
    this.afterUpdate = function() {   	
    	if (!this._defaultSet) {  
    		this._sl.setValue(dValue1);
    		this._sl.setValue2(dValue2);  
    		this._defaultSet = true;  
        	sValue1 = this._sl.getValue();
        	sValue2 = this._sl.getValue2();
        	that.firePropertiesChanged(["SValue1"]);
        	that.firePropertiesChanged(["SValue2"]);
    		that.fireEvent("onChange");     		
    	}  
    	this._sl.setTotalUnits(tNumber);
    	this._sl.setMax(max);
    	this._sl.setMin(min);
    };
    
    this.SValue1 = function(value) {  
    	if (value === undefined) {  
    		return sValue1;  
    	} else {  
    		sValue1 = value;  
    		return this;  
    	}       
    };
    
    this.SValue2 = function(value) {  
    	if (value === undefined) {  
    		return sValue2;  
    	} else {  
    		sValue2 = value;  
    		return this;  
    	}       
    };
	
    this.Min = function(value) {  
    	if (value === undefined) {  
    		return min;  
    	} else {  
    		min = value;  
    		return this;  
    	}       
    };
    
    this.Max = function(value) {  
    	if (value === undefined) {  
    		return max;  
    	} else {  
    		max = value;  
    		return this;  
    	}       
    };
    
    this.DValue1 = function(value){        
		if(value===undefined) {    
			return dValue1;   
		} else { 
			dValue1 = value;
			return this;   
		}   
    };  
    
    this.DValue2 = function(value){        
		if(value===undefined) {    
			return dValue2;   
		} else { 
			dValue2 = value;
			return this;   
		}   
    }; 
    
	this.TNumber = function(value) {
		if(value===undefined) {
			return tNumber;
		} else {
			tNumber = value;
			return this;
		};
	};

});
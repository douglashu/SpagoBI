/**
 * SpagoBI - The Business Intelligence Free Platform
 *
 * Copyright (C) 2004 - 2008 Engineering Ingegneria Informatica S.p.A.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * 
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.

 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 * 
 **/
 
/**
  * Object name 
  * 
  * [description]
  * 
  * 
  * Public Properties
  * 
  * [list]
  * 
  * 
  * Public Methods
  * 
  *  [list]
  * 
  * 
  * Public Events
  * 
  *  [list]
  * 
  * Authors
  * 
  * - Alberto Ghedin (alberto.ghedin@eng.it)
  */

Ext.ns("Sbi.widgets");

Sbi.widgets.ModelInstanceTree = function(){
	
    // public space
	return {
    

    createGoalModelInstanceTree: function(conf){
    	return new Sbi.widgets.ColumnTree({
	        height: 300,
	        autoScroll:true,
	        title: ' ',
			autoWidth : true,
			height : 300,
			layout: 'fit',
			userArrows : true,
			animate : true,
			autoScroll : true,		
            style: {
                "border":"none"
            },
			enableDD : true,
            enableDrop: false,
            enableDrag: true,
            ddAppendOnly: false ,
            ddGroup  : 'tree2tree',
			scope : this,
			shadow : true,
			root : conf.rootNode, 
	        columns:[{
	            header:'kpi',
	            columnId: 'weight1',
	            width:200,
	            dataIndex:'modelText',
	            fieldType: 'text'
	        },{
	            header:'kpiId',
	            columnId: 'id',
	            width:0,
	            visibility: 'hidden',
	            dataIndex:'modelText',
	            fieldType: 'text'
	        },{
	            header:' ',
	            columnId: 'check',
	            width:30,
	            dataIndex:'checked',
	            fieldType: 'checkbox'
	        },{
	            header:'Peso 1',
	            columnId: 'weight1',
	            width:70,
	            dataIndex:'modelCode',
	            fieldType: 'input'
	        },{
	            header:'Peso 2',
	            columnId: 'weight2',
	            width:70,
	            dataIndex:'modelCode',
	            fieldType: 'input'
	        },{
	            header:' ',
	            columnId: 'threshold1',
	            width:70,
	            dataIndex:'kpiCode',
	            fieldType: 'input'
	        },{
	            header:' ',
	            columnId: 'threshold2',
	            width:55,
	            dataIndex:'modelCode',
	            fieldType: 'combo'
	        },{
	            header:' ',
	            columnId: 'threshold3',
	            width:55,
	            dataIndex:'kpiCode',
	            fieldType: 'combo'
	        },{
	            header:' ',
	            columnId: 'threshold4',
	            width:70,
	            dataIndex:'modelCode',
	            fieldType: 'input'
	        }],

	        loader: new Ext.tree.TreeLoader({
	           
	            uiProviders:{
	                'col': Sbi.widgets.ColumnNodeUI
	            },
				nodeParameter: 'modelInstId',
				dataUrl: conf.manageTreeService,
				baseParams : conf.treeLoaderBaseParameters,
		        createNode: function(attr) {
		        	attr.uiProvider='col';
		            if (attr.modelInstId) {
		                attr.id = attr.modelInstId;
		            }

		    		if (attr.kpiInstId !== undefined && attr.kpiInstId !== null
		    				&& attr.kpiInstId != '') {
		    			attr.iconCls = 'has-kpi';
		    		}
		    		if (attr.error !== undefined && attr.error !== false) {
		    			attr.cls = 'has-error';
		    		}
		    		var attrKpiCode = '';
		    		if(attr.kpiCode !== undefined){
		    			attrKpiCode = ' - '+attr.kpiCode;
		    		}
		    		if(attr.kpiInstActive !== undefined && attr.kpiInstActive){
		    			attr.disabled = attr.kpiInstActive;
		    			attr.cls = attr.cls+' line-through';
		    		}
	
					attr.checked= true;
					

		    		attr.qtip = attr.modelCode+' - '+attr.name+ attrKpiCode;
		    		
		    		return node = Ext.tree.TreeLoader.prototype.createNode.call(this, attr);
		        }
	        })

	    });
    }
	};
}();

var jsonObj = null;
var headName = {};
var seqlist = {};
var currentTable = '1103';

$(function(){ 
	headName.l1103 = new Array("Date","Passed","Failed_TR","Failed_Environment","Failed_Artifact","Inconclusive","Comment","G1_LTE_UP","G2_MSME_UP","Effectiveness","Stability");
	headName.l1104 = new Array("Date","Passed","Failed_TR","Failed_Environment","Failed_Artifact","Inconclusive","Comment","G1_LTE_UP","G2_LTE_UP","Effectiveness","Stability");
	headName.l1114 = new Array("Date","Passed","Failed_TR","Failed_Environment","Failed_Artifact","Inconclusive","Comment","G1_LTE_UP","G1_WCDMA_UP","Effectiveness","Stability");
	headName.l1115 = new Array("Date","Passed","Failed_TR","Failed_Environment","Failed_Artifact","Inconclusive","Comment","G1_LTE_UP","G1_WCDMA_UP","Effectiveness","Stability");
	
	seqlist.l1103 = new Array("id","date","passed","failed_TR","failed_Environment","failed_Artifact","inconclusive","comment","g1_LTE_UP","g2_MSME_UP","effectiveness","stability");
	seqlist.l1104 = new Array("id","date","passed","failed_TR","failed_Environment","failed_Artifact","inconclusive","comment","g1_LTE_UP","g2_LTE_UP","effectiveness","stability");
	seqlist.l1114 = new Array("id","date","passed","failed_TR","failed_Environment","failed_Artifact","inconclusive","comment","g1_LTE_UP","g1_WCDMA_UP","effectiveness","stability");
	seqlist.l1115 = new Array("id","date","passed","failed_TR","failed_Environment","failed_Artifact","inconclusive","comment","g1_LTE_UP","g1_WCDMA_UP","effectiveness","stability");
 
    //数据，实际情况是从后台获取的，格式json
     $.ajax({
      type: "POST",
      url: "/mavenSSM/testing/getAllList",
      data:{"table":"1103"},
      dataType: "json",
      success: function(data){
      	  jsonObj = data;
          $("#tableArea").createTable(data,{
              rows:10,
              needKey:true,
              headName:headName.l1103,
              needseqlist: true,
              seqlist: seqlist.l1103,
            
          });
      }
    });
    
   
            //实现选择框下拉菜单选项被点击之后的显示的个数，其中createtable.js是自己写的一个图表插件，目的是形成图表，相关js有对应注释。
           $("#selectpage").bind("change",function(){
            var r = parseInt($(this).val());
             if($(this).val()=="All"){
              r=jsonObj.length;
             }
             $("#tableArea").createTable(jsonObj,{
	              rows:10,
	              needKey:true,
	              headName:headName['l'+currentTable],
	              needseqlist:true,
	              seqlist: seqlist['l'+currentTable],
	          });
          });
          //实现search：处对应的筛选工作，根据选择框实现显示的对应个数。data[i]是满足条件的对应行。
          $("#inputNumber").bind("input",function(){
            var  r=parseInt($("#selectpage").val());
              if($("#selectpage").val()=="All"){
            	  r=parseInt(jsonObj.length);
              }
            var value = $(this).val();
            var temp = [];
            for(var i = 0;i < jsonObj.length;i++){
                for(x in jsonObj[i]){
                  if(x != "id" && jsonObj[i][x] != null && (""+jsonObj[i][x]).indexOf(value) > -1){
                    temp.push(jsonObj[i]);
                    break;
                  }
                }
              }
            $("#tableArea").createTable(temp,{
	              rows:10,
	              needKey:true,
	              headName:headName['l'+currentTable],
	              needseqlist:true, 
	              seqlist: seqlist['l'+currentTable],
	          });
        });


});
//table默认是显示10行。
function createTable(data){
       $("#tableArea").createTable(data, {
           rows:10
       });
}
//将table上的表头值对应到add部分new test显示。
$(function(){
  $("#newGroup").bind("click",function(){
      var tableTh=$("#example thead th");
      var addTh=$("#addGroup th");
      for(var i=0; i< addTh.length; i++){
         $(addTh[i]).text($(tableTh[i]).text() + ":");
      }
  });

});
//which是选择的下拉菜单中的1103,1104,1114,1115
$(function(){
    $("#chartSelect").bind("change",function(){
     var which=$(this).find("option:selected").val(); 
     getData(which);
     //切换表格时清空add数据
     $("#addGroup").find("input").val("");
     $("#addGroup").find("textarea").val("");


    });
});
//获取四张表的data
 
function getData(which){
    currentTable = which;
	$.ajax({
	      type: "POST",
	      url: "/mavenSSM/testing/getAllList",
	      data:{"table":which},
	      dataType: "json",
	      success:function(data){
	       	jsonObj = data;
	          $("#tableArea").createTable(data,{
	              rows:10,
	              needKey:true,
	              headName:headName['l'+which],
	              needseqlist: true,
	              seqlist: seqlist['l'+which],
	          });
	      }
	    });
    
}
 
/*
实现点击add按钮和edit按钮后显示内容中自动计算effectiveness和stability的值。
*/

$(function(){

           var $inputs =$("#addGroup").find("input");
           for(var i=1;i<=5;i++){
             $($inputs[i]).bind("blur",function(){
               var passed1=parseInt($($inputs[1]).val());
               var passed2=parseInt($($inputs[2]).val());
                calAverage($inputs,9,passed1);
                calAverage($inputs,8,passed2);
             });
           }
           var $editinputs=$("#EditTable").find("input");
           for(var i=1;i<=5;i++){
             $($editinputs[i]).bind("blur",function(){
               var passed1=parseInt($($editinputs[1]).val());
               var passed2=parseInt($($editinputs[2]).val());
                calAverage($editinputs,9,passed1);
                calAverage($editinputs,8,passed2);
             });
           }




});
    /*
    检查输入值是否是输入，选中的输入框为1-5，方便计算百分比
    */
    function calAverage(inputs,row,passed){
        var reg=/^\d+$/;
        var sum=0;
        for(var i=1;i<=5;i++){
          if(!reg.test($(inputs[i]).val())){
            return false;
          }
          else
            sum += parseInt($(inputs[i]).val());

        }

           //if(passed==0)
            //return false;
            var ans= calAve(sum,passed);
            $(inputs[row]).val(ans);
    }
    /*
    总数 ,通过数 最后求得通过率
    */
function calAve (sum,passed){

   return (Math.round( passed / sum * 10000) / 100.00 + "%");
 }



/*
这是一个验证输入合法的过程,以及对四个表格的不同输入数据的过程
*/
$(function(){
	//让cancel按钮实现清空输入框和textarea框的结果
	 $("#cancelButton").bind("click",function(){
		 $("#addGroup").find("input").val("");
	     $("#addGroup").find("textarea").val("");
	  	  });
	
     $("#sureAdd").bind("click",function(){
          $("#addError").text("").hide();
          //$("#editdate3").trigger(" blur");
          var $inputs =$("#addGroup").find("input");
          if($inputs[0].value== ""){
            showError("Date can not be null !");
            return false;
          }
          else if($inputs[1].value== ""){
            showError("  Passed can not be null !");
            return false;
          }
         else  if($inputs[2].value== ""){
            showError("  Failed TR can not be null !");
            return false;
          }

          else if($inputs[3].value== ""){
            showError("  Failed Environment can not be null !");
            return false;
          }
          else if($inputs[4].value== ""){
            showError("  Failed Artifact can not be null !");
            return false;
          }
          else if($inputs[5].value== ""){
            showError("  Inconclusive can not be null !");
            return false;
          }

          else if($inputs[6].value== ""){
            showError("  G1 LTE UP can not be null !");
            return false;
          }
          var datas = {};
          switch(currentTable){
              case "1103":
    		      datas = {"id": 0,"date":$inputs[0].value,"passed":$inputs[1].value,"failed_TR":$inputs[2].value,
            		  "failed_Environment":$inputs[3].value,"failed_Artifact":$inputs[4].value,
            		  "inconclusive":$inputs[5].value,"comment":$("#comment1").val(),"g1_LTE_UP":$inputs[6].value,"g2_MSME_UP":$inputs[7].value,"effectiveness":$inputs[8].value,"stability":$inputs[9].value};
    		      break;
              case "1104":
            	  datas = {"id": 0,"date":$inputs[0].value,"passed":$inputs[1].value,"failed_TR":$inputs[2].value,
            		  "failed_Environment":$inputs[3].value,"failed_Artifact":$inputs[4].value,
            		  "inconclusive":$inputs[5].value,"comment":$("#comment1").val(),"g1_LTE_UP":$inputs[6].value,"g2_LTE_UP":$inputs[7].value,"effectiveness":$inputs[8].value,"stability":$inputs[9].value};
    		      break;
              case "1114":
            	  datas = {"id": 0,"date":$inputs[0].value,"passed":$inputs[1].value,"failed_TR":$inputs[2].value,
            		  "failed_Environment":$inputs[3].value,"failed_Artifact":$inputs[4].value,
            		  "inconclusive":$inputs[5].value,"comment":$("#comment1").val(),"g1_LTE_UP":$inputs[6].value,"g1_WCDMA_UP":$inputs[7].value,"effectiveness":$inputs[8].value,"stability":$inputs[9].value};
    		      break;
              case "1115":
            	  datas = {"id": 0,"date":$inputs[0].value,"passed":$inputs[1].value,"failed_TR":$inputs[2].value,
            		  "failed_Environment":$inputs[3].value,"failed_Artifact":$inputs[4].value,
            		  "inconclusive":$inputs[5].value,"comment":$("#comment1").val(),"g1_LTE_UP":$inputs[6].value,"g1_WCDMA_UP":$inputs[7].value,"effectiveness":$inputs[8].value,"stability":$inputs[9].value};
    		      break;
             
          }
        	  
     	  var cpage = parseInt($("#currentPage").val());
          $.ajax({
        	  type:"POST",
        	  url: "/mavenSSM/testing/addItem"+currentTable,
        	  dataType: "json",
        	  data:JSON.stringify(datas),
        	  contentType:"application/json",
        	  success:function(data){
        		  datas.id = data.id;
        		  jsonObj.push(datas);
        		  $("#tableArea").createTable(jsonObj,{
        			  rows:10,
                      needKey:true,
                      headName:headName["l"+currentTable],
                      needseqlist: true,
                      seqlist:seqlist["l"+currentTable],
                      pages:cpage
                  });
        		  //  验证完后ajax,最后把$("#cancelButton").click(),写入ajax的success中
        	         $("#cancelButton").click();
        	         //成功提交后切换模态框数据
        	         $("#addGroup").find("input").val("");
        	         $("#addGroup").find("textarea").val("");
        	 
        	  }
          });
         
     });
     $("#sureEdit").bind("click",function(){
          $("#editError").text("").hide();
          //$("#editdate3").trigger(" blur");
          var $inputs= $("#EditTable").find("input");
          var datas = {};
          switch(currentTable){
              case "1103":
            	  datas = {"id": $("#editID").val(),"date":$inputs[0].value,"passed":$inputs[1].value,"failed_TR":$inputs[2].value,
            		  "failed_Environment":$inputs[3].value,"failed_Artifact":$inputs[4].value,
            		  "inconclusive":$inputs[5].value,"comment":$("#editcomment1").val(),"g1_LTE_UP":$inputs[6].value,"g2_MSME_UP":$inputs[7].value,"effectiveness":$inputs[8].value,"stability":$inputs[9].value};
            	  break;
              case "1104":
            	  datas = {"id": $("#editID").val(),"date":$inputs[0].value,"passed":$inputs[1].value,"failed_TR":$inputs[2].value,
            		  "failed_Environment":$inputs[3].value,"failed_Artifact":$inputs[4].value,
            		  "inconclusive":$inputs[5].value,"comment":$("#editcomment1").val(),"g1_LTE_UP":$inputs[6].value,"g2_LTE_UP":$inputs[7].value,"effectiveness":$inputs[8].value,"stability":$inputs[9].value};
            	  break;
              case "1114":
            	  datas = {"id": $("#editID").val(),"date":$inputs[0].value,"passed":$inputs[1].value,"failed_TR":$inputs[2].value,
            		  "failed_Environment":$inputs[3].value,"failed_Artifact":$inputs[4].value,
            		  "inconclusive":$inputs[5].value,"comment":$("#editcomment1").val(),"g1_LTE_UP":$inputs[6].value,"g1_WCDMA_UP":$inputs[7].value,"effectiveness":$inputs[8].value,"stability":$inputs[9].value};
            	  break;
              case "1115":
            	  datas = {"id": $("#editID").val(),"date":$inputs[0].value,"passed":$inputs[1].value,"failed_TR":$inputs[2].value,
            		  "failed_Environment":$inputs[3].value,"failed_Artifact":$inputs[4].value,
            		  "inconclusive":$inputs[5].value,"comment":$("#editcomment1").val(),"g1_LTE_UP":$inputs[6].value,"g1_WCDMA_UP":$inputs[7].value,"effectiveness":$inputs[8].value,"stability":$inputs[9].value};
            	  break;
          }
         
        //验证完后ajax,最后把$("#cancelButton").click(),写入ajax的success中
          var cpage = parseInt($("#currentPage").val());
          $.ajax({
        	  type: "POST",
        	  url: "/mavenSSM/testing/editItem"+currentTable,
        	  data: JSON.stringify(datas),
        	  contentType:"application/json",
        	  dataType: "json",
        	  success: function(data){
        		  changeItem(datas);
        		  $("#tableArea").createTable(jsonObj,{
        			  rows:10,
                      needKey:true,
                      headName:headName["l"+currentTable],
                      needseqlist: true,
                      seqlist:seqlist["l"+currentTable],
                      pages:cpage
                  });
        		  $("#cancelEdit").click();
        	  }
          });
         
     });

});

function changeItem(data){
	for(var i = 0;i < jsonObj.length;i++){
		if(jsonObj[i].id == data.id){
			jsonObj[i] = data;
			break;
		}
	}
}
/*
点击edit按钮之后，当点击table中的任意一个th都会跳出edit窗口实现编辑功能。点击完edit按钮，使add按钮隐藏，edit按钮隐藏，closeEdit显示。
“#tablearea”是表示点击的任意的th区域，“#newGroup”是add按钮的id,"#closeEdit"是closeedit按钮的id。

*/
$(function(){
         $("#changeUser").bind("click",function(){
                 $(this).hide(360);
                 $("#newGroup").hide(360);
                 $("#closeEdit").show();
            $("#tableArea").bind("click",function(evt){
                 var which = evt.target;
                 var  $tr = $(which).closest("tr");
                 $("#editID").val($tr.find("input:hidden").val());
                 var tableth1=$("#example thead th");//1
                 var editth1=$("#EditTable th");//2
                 for(var j=0;j<editth1.length;j++){//3
                   $(editth1[j]).text($(tableth1[j]).text());//1,2,3,以及此行是将对应得四个不同table的头标签的值都显示在edit部分的头标签。
                 }
                 createEditModel($tr);
                 $("#edit").trigger("click");
            });
         });
          $("#closeEdit").bind("click",function(){
                $(this).hide(360);
                $("#newGroup").show();
                $("#changeUser").show();
                $("#tableArea").unbind("click");
          });
          /*由于comment中的内容比较多，所以设置其为textarea的标签，所以前面用于计算effectiveness和stability的input标签的前六个正常放入值，comment之后的值就是存在错位放的情况。
          $tds[i]的值是遍历的选中的th中的每个td值，只是这边comment需要也特别设置。
          */
         function createEditModel($tr){
                var $input = $("#EditTable").find("input");
                var $tds = $tr.find("td");
                var i=0;
                for(;i<6;i++){
                  $($input[i]).val($tds[i].innerText);
                }
                $("#editcomment1").val($tds[i++].innerText);
                for(;i<$tds.length;i++){
                  $($input[i-1]).val($tds[i].innerText);
                }
         }
});

  function showError(msg){
    $("#addError").text(msg).show();
  }

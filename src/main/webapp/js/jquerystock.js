function  createChart (which){
	$.ajax({
		type:"post",
		url:"/mavenSSM/getChart",
		data:{"table": which},
		dataType:"json",
		success: function(data){
			var date1=[];
			var date2=[];
			var date3=[];
			var date4=[];
			var line1=[];
			var line2=[];
			var line3=[];
			var line4=[];
			for(var i=0;i<data.length;i++){
				var time=data[i].date.split("-");
				var year=parseInt(time[0]);
				var month=parseInt(time[1]);
				var day= parseInt(time[2]);
				date1.push([Date.UTC(year,month-1,day),parseInt(data[i].passed)]);
				date2.push([Date.UTC(year,month-1,day),parseInt(data[i].failed_TR)]);
				date3.push([Date.UTC(year,month-1,day),parseInt(data[i].failed_Environment)]);
				date4.push([Date.UTC(year,month-1,day),parseInt(data[i].failed_Artifact)]);
				line1.push([Date.UTC(year,month-1,day),parseFloat(data[i].effectiveness)]);
				line2.push([Date.UTC(year,month-1,day),parseFloat(data[i].stability)]);
				
				
			}
			$('#edu2').empty();
		    $('#edu2').highcharts('StockChart',{
			       chart:{
			            /*zoomType:'x',*/

			            lang:{
			                 rangeSelectorZoom:'Time'
			            }
			         },
			      title:{
			        text:'LISTP'+which +'RESULT',
			        style:{
			        	fontSize:"21px", 
			        	fontWight:"bold"
			        	
			        }
			       },

			      xAxis:[{

			            /*tickInterval: 7 * 24 * 3600 * 1000, // 坐标轴刻度间隔为一星期
			                tickWidth: 0,
			                gridLineWidth: 1,
			                labels: {
			                    align: 'left',
			                    x: 3,
			                    y: -3
			                },
			                // 时间格式化字符
			                // 默认会根据当前的刻度间隔取对应的值，即当刻度间隔为一周时，取 week 值
			                dateTimeLabelFormats: {
			                    week: '%Y-%m-%d'
			                },*/
			            crosshair:true,


			    }],
			    /*xAxis:{
			                        // 如果X轴刻度是日期或时间，该配置是格式化日期及时间显示格式
			                        dateTimeLabelFormats: {
			                            second: '%Y-%m-%d<br/>%H:%M:%S',
			                            minute: '%Y-%m-%d<br/>%H:%M',
			                            hour: '%Y-%m-%d<br/>%H:%M',
			                            day: '%Y<br/>%m-%d',
			                            week: '%Y<br/>%m-%d',
			                            month: '%Y-%m',
			                            year: '%Y'
			                        }
			          },*/
			    yAxis: [{ // Primary yAxis

			                labels: {

			                   format: '{value} %',

			                   style: {
			                       color: '#000',
			                       /*tickPositions: [0, 20, 50, 100],*/
			                   },

			               },
			               title: {
			                   text: 'percent',
			                   style: {
			                       color: '#000'
			                   }
			               },
			               opposite: true
			           }, { // Secondary yAxis
			               grideLineWidth:0,
			               title: {
			                   text: 'amount',
			                   style: {
			                       color: '#000',
			                       /*tickInterval:[0,20%,40%,60%,80%,100%],*/
			                   }
			               },

			               labels: {
			               format: '{value} ',
			               style: {
			                   color: '#000'
			                 },

			               },
			               opposite: false
			          }],
			       tooltip:{
			            shared:true

			             },

			        legend: {
			              /*  layout:'vertical',*/
			                enabled: true,
			                align: 'center',

			                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
			                borderColor: '#CCC',
			                borderWidth: 1,
			                shadow: false
			            },
			        plotOptions: {

			            column: {
			                stacking: 'normal',
			                enableMouseTracking:true,
			                minPointLength: 2,
			                tooltip: {
			                  /*headerFormat: '<b>{point.x}</b><br/>',
			                  pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'*/

			                        },
			                dataLabels: {
			                enabled: true,

			                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
			                }

			             },
			           line:{
			                minPointLength: 2,
			                 dataLabels:{
			                    enabled:false,
			                    formatter:function(){
			                     return this.point.y+'%';
			                   }
			                },
			                 enableMouseTracking:true,
			                 symbol:["circle","triangle","square","diamond"],


			             }
			          },

			          exporting:{
			                        // 是否允许导出
			                    enabled:true,
			                        // 按钮配置
			                    buttons:{
			                            // 导出按钮配置
			                          exportButton:{
			                             menuItems: null,
			                             onclick: function() {
			                             this.exportChart();
			                                }
			                          }
			                        },
			                     printButton:{
			                            enabled:false
			                             }
			                 },
			      rangeSelector: {
			               height: 10,
			               allButtonsEnabled:true,
			               inputEnabled:true,
			             buttons: [{
			                   type: 'month',
			                   count: 1,
			                   text: '1m'
			               }, {
			                   type: 'month',
			                   count: 3,
			                   text: '3m'
			               }, {
			                   type: 'month',
			                   count: 6,
			                   text: '6m'
			               },  {
			                   type: 'ytd',
			                   text: 'YTD'
			               },  {
			                   type: 'year',
			                   count: 1,
			                   text: '1y'
			               }, {
			                   type: 'all',
			                   text: 'All'
			               }],
			               buttonTheme: { // styles for the buttons
			                   fill: 'none',
			                   stroke: '#68A',
			                 'stroke-width': 0,
			                   r: 8,
			                   style: {
			                       color: '#000',
			                       fontWeight: 'bold'
			                   },
			                   states: {
			                       hover: {
			                       },
			                       select: {
			                           fill: '#039',
			                           style: {
			                               color: 'white'
			                           }
			                       }
			                       // disabled: { ... }
			                   }
			               },
			               inputBoxBorderColor: 'gray',
			               inputBoxWidth: 120,
			               inputBoxHeight: 18,
			               inputDateFormat:'%Y-%m-%d',
			               inputEditDateFormat:'%Y-%m-%d',
			               inputStyle: {
			                   color: '#039',
			                   fontWeight: 'bold'
			               },
			               labelStyle: {
			                   color: '#999',
			                   fontWeight: 'bold'
			               },



			             selected: 1
			           },
			        scrollbar: {
			           enabled: true,
			           height: 20,
			           barBackgroundColor: '#FFF',
			           barBorderRadius: 7,
			           barBorderWidth: 0,
			           buttonBackgroundColor: '#f2f2f2',
			           buttonBorderWidth: 0,
			           buttonArrowColor: 'black',
			           buttonBorderRadius: 7,
			           rifleColor: 'black',
			          trackBackgroundColor: '#FFF',
			           trackBorderWidth: 1,
			           trackBorderColor: 'silver',
			           trackBorderRadius: 7
			       },
			       navigator: {
			           //enabled : true
			           height: 30

			           },
			        series: [{
			              name: 'passed',
			              color: '#4572A7',
			              type: 'column',
			              yAxis: 1,
			                //data: [0, 31.5, 10.4, 12.2, 14.0, 76.0, 35.6, 48.5, 16.4, 94.1, 65.6, 54.4,28,55],
			              data:date1,
			              dataGrouping: {
			               units: [[
			                   'week', // unit name
			                   [1] // allowed multiples
			               ], [
			                   'month',
			                   [1, 2, 3, 4, 6]
			               ]]
			           },
			              tooltip: {
			                  valueSuffix: ' '
			              }
			          }, {
			              name: 'Failed TR',
			              color: '#7772A7',
			              type: 'column',
			              yAxis: 1,
			              //data: [42, 31.5, 10.4, 29.2, 44.0, 17.0, 35.6, 48.5, 20.4, 19.1, 45.6, 54.4,44,26],
			              data:date2,
			              dataGrouping: {
			               units: [[
			                   'week', // unit name
			                   [1] // allowed multiples
			               ], [
			                   'month',
			                   [1, 2, 3, 4, 6]
			               ]]
			           },
			              tooltip: {
			                  valueSuffix: ' '
			              }

			          }, {
			              name: 'Failed Environment',
			              color: '#000',
			              type: 'column',
			              yAxis: 1,
			              //data: [41.9, 31.5, 18.4, 14.2, 44.0, 16.0, 35.6, 48.5, 21.4, 14.1, 65.6, 34.4,18,25],
			              data:date3,
			              dataGrouping: {
			               units: [[
			                   'week', // unit name
			                   [1] // allowed multiples
			               ], [
			                   'month',
			                   [1, 2, 3, 4, 6]
			               ]]
			           },
			              tooltip: {
			                  valueSuffix: ' '
			              }

			          },{
			              name: 'Failed Artifact',
			              color: '#0F0',
			              type: 'column',
			              yAxis: 1,
			              //data: [20, 31.5, 16.4, 29.2, 14.0, 17.0, 15.6, 18.5, 26.4, 19.1, 35.6, 24.4,36,33],
			              data:date4,
			              dataGrouping: {
			               units: [[
			                   'week', // unit name
			                   [1] // allowed multiples
			               ], [
			                   'month',
			                   [1, 2, 3, 4, 6]
			               ]]
			           },
			              tooltip: {
			                  valueSuffix: ' '
			              }

			          }, {
			              name: 'Effectiveness',
			              color: '#3498DB',
			              type: 'line',
			              //data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9 ,9.6,34],
			              data:line1,
			              dataGrouping: {
			               units: [[
			                   'week', // unit name
			                   [1] // allowed multiples
			               ], [
			                   'month',
			                   [1, 2, 3, 4, 6]
			               ]]
			           },
			              tooltip: {
			                  valueSuffix: '%',
			                  valueDecimals:2,

			              }
			          }, {
			              name: 'Stability',
			              color: '#66114E',
			              type: 'line',
			              //data: [8, 9, 11, 14.5, 35, 33, 55, 67, 36, 44, 37,20,56],
			              data:line2,
			              dataGrouping: {
			               units: [[
			                   'week', // unit name
			                   [1] // allowed multiples
			               ], [
			                   'month',
			                   [1, 2, 3, 4, 6]
			               ]]
			           },
			              tooltip: {
			                  valueSuffix: '%',
			                  valueDecimals:2,
			              }
			          }/*, {//防止折线图中有新增的部分，那么可以在这边进行增加。此图只有二个折线图分别是line1，和line2。
			              name: 'Temperature3',
			              color: '#89A54E',
			              type: 'line',
			              //data: [22, 24, 26, 28, 30, 33, 25, 26.5, 35, 22, 34,33,80],
			              data:line3,
			              dataGrouping: {
			               units: [[
			                   'week', // unit name
			                   [1] // allowed multiples
			               ], [
			                   'month',
			                   [1, 2, 3, 4, 6]
			               ]]
			           },
			              tooltip: {
			                  valueSuffix: '%',
			                  valueDecimals:2,
			              }
			          }, {
			              name: 'Temperature4',
			              color: '#ed7eee',
			              type: 'line',
			              //data: [21, 25, 30, 33, 19, 21, 25.2, 29, 20, 18, 34,17,60],
			              data:line4,
			              dataGrouping: {
			               units: [[
			                   'week', // unit name
			                   [1] // allowed multiples
			               ], [
			                   'month',
			                   [1, 2, 3, 4, 6]
			               ]]
			           },
			              tooltip: {
			                  valueSuffix: '%',
			                  valueDecimals:2,
			              }
			          }*/
			          /*,{
			            dataGrouping: {
			                    units: [[
			                        'week', // unit name
			                        [1] // allowed multiples
			                    ], [
			                        'month',
			                        [1, 2, 3, 4, 6]
			                    ]]
			                }
			          }*/],
			          credits: {
			            enabled: false
			        }



			  });
			  /* Highcharts.setOptions({

			         global: {

			          useUTC: false

			             },

			          lang:{

			          months:['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月','九月',  '十月','十一月', '十二月'],

			          weekdays:['星期日',  '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

			          }

			      });*/


		}
		
		
	});
	
}

$(function(){
	createChart("1103");
	$("#buttonArea div").bind("click",function(){
		createChart($(this).text().substring(5,9));
		$(this).siblings().removeClass("active1");
		$(this).addClass("active1");
		
		
	});
	
});
	
 

 
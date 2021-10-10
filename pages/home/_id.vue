<template>
  <form id="mainform" method="post" runat="server">
    <style>
      :root {
        --CenterColumn-backgroundImage: url('{{ Component.image.jss.value.src }}');
      }
    </style>
      <div id="MainPanel">
        <div id="CenterColumn">
          <div id="InnerCenter">
            <div id="Header">
                <img :src="Component.logo.jss.value.src" :alt="Component.logo.jss.value.alt" id="scLogo" />
            </div>
            <div id="Content">
              <div id="LeftContent" v-if="Component">
                  <div>
                    <h1 class="contentTitle">
                      {{ Component.Title.rendered }}
                    </h1>
                    <div class="contentDescription" v-html="Component.Text.rendered">
                    </div>
                  </div>
              </div>				
            </div>
            <div id="Footer"><hr class="divider"/>&#169; {{ new Date() }} Sitecore</div>
          </div>
        </div>
      </div>
    </form>
</template>

<script>
import component from '~/apollo/queries/component'
export default {
  apollo: {
    Component: {
      query: component,
      prefetch: ({ route }) => ({ path: route.params.id }),
      variables () {
        return { path: this.$route.params.id }
      }
    }
  },
  head () {
    return {
      title: (this.Component ? `${this.Component.Title.rendered}` : 'Loading')
    }
  },
  methods: {
  }
}
</script>

<style>
html, body {
    box-sizing: border-box;
    height: 100%;
    font-family: 'Open Sans', Arial, sans-serif;
    font-size: 13px;
    margin: 0px;
    color: #131313;
}

button, input, optgroup, select, textarea {
    font-family: inherit;
}


	a:link {
		text-decoration: none;
		color: #0088cc;
	}
	
	a:hover {
		text-decoration: underline;
	}
	
	#CenterColumn {
	  margin: auto;
	  padding-right: 20px;
	  padding-left: 20px;
	  max-width: 1170px;
	  min-height: 402px;
    background: white var(--CenterColumn-backgroundImage) no-repeat;
	  background-size: 1170px 402px;
	  text-align: left;
	}	
	
	#InnerCenter {
		margin: auto;	
		position:relative;
		width:1150px;
		height:700px;
	}	
	
	#Header {
		height:402px;
	}	
	
	#Footer {
		width:100%;
		clear:both; 
		padding-top:2px;
	}	
	
	#LeftContent {
        width:750px;
	    text-align: justify;
	}
	
	#scLogo {
		margin-top:20px;
	}
	
	.contentTitle {
		margin-top: 50px;
		font-weight:400;
		font-size: 36px;
	}
	
	.divider {
		background-color: #DCDCDC;
		border: 0 none;
		clear: both;
		display: block;
		height: 1px;
		float:none;
		margin: 50px auto;
		width: 100%;
	}
	
	.contentDescription{
		padding-right:20px;
		line-height: 22px;
	}	
</style>
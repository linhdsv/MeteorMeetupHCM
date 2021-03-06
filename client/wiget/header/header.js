// =============================================================================
// ,,,,,,,,, ,,,
// ,,,,,,,, ,,,  Copyright:
// ,,,     ,,,          This source is subject to the Designveloper JSC
// ,,,    ,,,           All using or modify must have permission from us.
// ,,,   ,,,            http://designveloper.com
// ,,,,,,,,
// ,,,,,,,       Name:  DSVScriptTemplate
//
// Purpose:
//          Describe the purpose of the script [short version]
// Class:
//          one ; two ; three
// Functions:
//          one ; two ; three
// Called From:
//          (script) any
// Author:
//          hocnguyen
// Notes:
//          Additional information [long version]
// Changelog:
//          6/2/16 - hocnguyen - Init first revision.
// =============================================================================
Template.header.helpers({
  'haveUser': function(){
    return !!Meteor.user();
  },
  'navLink': function(){
    return ENUM.NAV_LINK;
  },
  'isNavActive': function(){
    if (Router.current().route.getName() == ""+this) return "active";
  }
})
Template.header.events({
  'click #signout-input': function(e){
    e.preventDefault();
    Meteor.logout();
    Router.go('/signin');
  },
  
  'click .navbar-nav li': function(e) {
    $('.navbar-nav li').removeClass('active');
    $(e.currentTarget).addClass('active');
  }
})

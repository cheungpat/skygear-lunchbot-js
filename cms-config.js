function skygearCMSConfig(nga, title, base_api_url) {
  var admin = nga.application(title).baseApiUrl(base_api_url);
  var customHeaderTemplate = '<div class="navbar-header">' + '<a class="navbar-brand-skygear" href="#" ng-click="appController.displayHome()">' + '<img src="{{ static_assets_url_prefix }}img/skygear-logo.svg"><span class="header-cms">CMS</span>' + '</a>' + '<p class="navbar-text navbar-right navbar-logout">' + '<a href="#/logout">' + 'Logout' + '</a>' + '</p>' + '</div>';
  admin.header(customHeaderTemplate);
  var dashboardMenu = nga.menu().title('Dashboard').icon('<span class="nav-ico ico-dashboard"></span>').link('/dashboard');
  var tableMenu = nga.menu().title('Tables').icon('<span class="nav-ico ico-table"></span>').autoClose(false);
  var mainMenu = nga.menu().addChild(dashboardMenu).addChild(tableMenu);
  admin.menu(mainMenu);
  var lunch_place = nga.entity('lunch_place');
  lunch_place.identifier(nga.field('_id'));
  lunch_place.creationView().fields([
    nga.field('_id').editable(false),
    nga.field('_created_at', 'datetime').editable(false).label('Created at'),
    nga.field('_created_by', 'string').editable(false).label('Created by'),
    nga.field('_updated_at', 'datetime').editable(false).label('Updated at'),
    nga.field('_updated_by', 'string').editable(false).label('Updated by'),
    nga.field('active', 'boolean'),
    nga.field('name', 'string')
  ]);
  lunch_place.deletionView().fields([
    nga.field('_id').editable(false),
    nga.field('_created_at', 'datetime').editable(false).label('Created at'),
    nga.field('_created_by', 'string').editable(false).label('Created by'),
    nga.field('_updated_at', 'datetime').editable(false).label('Updated at'),
    nga.field('_updated_by', 'string').editable(false).label('Updated by'),
    nga.field('active', 'boolean'),
    nga.field('name', 'string')
  ]);
  lunch_place.editionView().fields([
    nga.field('_id').editable(false),
    nga.field('_created_at', 'datetime').editable(false).label('Created at'),
    nga.field('_created_by', 'string').editable(false).label('Created by'),
    nga.field('_updated_at', 'datetime').editable(false).label('Updated at'),
    nga.field('_updated_by', 'string').editable(false).label('Updated by'),
    nga.field('active', 'boolean'),
    nga.field('name', 'string')
  ]);
  lunch_place.listView().fields([
    nga.field('_created_at', 'datetime').editable(false).label('Created at'),
    nga.field('_created_by', 'string').editable(false).label('Created by'),
    nga.field('_updated_at', 'datetime').editable(false).label('Updated at'),
    nga.field('_updated_by', 'string').editable(false).label('Updated by'),
    nga.field('active', 'boolean'),
    nga.field('name', 'string')
  ]);
  lunch_place.listView().listActions([
    'show',
    'edit',
    'delete'
  ]);
  lunch_place.showView().fields([
    nga.field('_id').editable(false),
    nga.field('_created_at', 'datetime').editable(false).label('Created at'),
    nga.field('_created_by', 'string').editable(false).label('Created by'),
    nga.field('_updated_at', 'datetime').editable(false).label('Updated at'),
    nga.field('_updated_by', 'string').editable(false).label('Updated by'),
    nga.field('active', 'boolean'),
    nga.field('name', 'string')
  ]);
  admin.addEntity(lunch_place);
  tableMenu.addChild(nga.menu(lunch_place).icon(null));
  var lunch_proposal = nga.entity('lunch_proposal');
  lunch_proposal.identifier(nga.field('_id'));
  lunch_proposal.creationView().fields([
    nga.field('_id').editable(false),
    nga.field('_created_at', 'datetime').editable(false).label('Created at'),
    nga.field('_created_by', 'string').editable(false).label('Created by'),
    nga.field('channel', 'string'),
    nga.field('place', 'reference').targetEntity(lunch_place).targetField(nga.field('name'))
  ]);
  lunch_proposal.deletionView().fields([
    nga.field('_id').editable(false),
    nga.field('_created_at', 'datetime').editable(false).label('Created at'),
    nga.field('_created_by', 'string').editable(false).label('Created by'),
    nga.field('channel', 'string'),
    nga.field('place', 'reference').targetEntity(lunch_place).targetField(nga.field('name'))
  ]);
  lunch_proposal.editionView().fields([
    nga.field('_id').editable(false),
    nga.field('_created_at', 'datetime').editable(false).label('Created at'),
    nga.field('_created_by', 'string').editable(false).label('Created by'),
    nga.field('channel', 'string'),
    nga.field('place', 'reference').targetEntity(lunch_place).targetField(nga.field('name'))
  ]);
  lunch_proposal.listView().fields([
    nga.field('_created_at', 'datetime').editable(false).label('Created at'),
    nga.field('_created_by', 'string').editable(false).label('Created by'),
    nga.field('channel', 'string'),
    nga.field('place', 'reference').targetEntity(lunch_place).targetField(nga.field('name'))
  ]);
  lunch_proposal.listView().listActions([
    'show',
    'edit',
    'delete'
  ]);
  lunch_proposal.showView().fields([
    nga.field('_id').editable(false),
    nga.field('_created_at', 'datetime').editable(false).label('Created at'),
    nga.field('_created_by', 'string').editable(false).label('Created by'),
    nga.field('channel', 'string'),
    nga.field('place', 'reference').targetEntity(lunch_place).targetField(nga.field('name'))
  ]);
  admin.addEntity(lunch_proposal);
  tableMenu.addChild(nga.menu(lunch_proposal).icon(null));
  var user = nga.entity('user');
  user.identifier(nga.field('_id'));
  user.creationView().fields([
    nga.field('_id').editable(false),
    nga.field('_created_at', 'datetime').editable(false).label('Created at'),
    nga.field('_created_by', 'string').editable(false).label('Created by'),
    nga.field('_updated_at', 'datetime').editable(false).label('Updated at'),
    nga.field('_updated_by', 'string').editable(false).label('Updated by')
  ]);
  user.deletionView().fields([
    nga.field('_id').editable(false),
    nga.field('_created_at', 'datetime').editable(false).label('Created at'),
    nga.field('_created_by', 'string').editable(false).label('Created by'),
    nga.field('_updated_at', 'datetime').editable(false).label('Updated at'),
    nga.field('_updated_by', 'string').editable(false).label('Updated by')
  ]);
  user.editionView().fields([
    nga.field('_id').editable(false),
    nga.field('_created_at', 'datetime').editable(false).label('Created at'),
    nga.field('_created_by', 'string').editable(false).label('Created by'),
    nga.field('_updated_at', 'datetime').editable(false).label('Updated at'),
    nga.field('_updated_by', 'string').editable(false).label('Updated by')
  ]);
  user.listView().fields([
    nga.field('_id').editable(false),
    nga.field('_created_at', 'datetime').editable(false).label('Created at'),
    nga.field('_created_by', 'string').editable(false).label('Created by'),
    nga.field('_updated_at', 'datetime').editable(false).label('Updated at'),
    nga.field('_updated_by', 'string').editable(false).label('Updated by')
  ]);
  user.listView().listActions([
    'show',
    'edit',
    'delete'
  ]);
  user.showView().fields([
    nga.field('_id').editable(false),
    nga.field('_created_at', 'datetime').editable(false).label('Created at'),
    nga.field('_created_by', 'string').editable(false).label('Created by'),
    nga.field('_updated_at', 'datetime').editable(false).label('Updated at'),
    nga.field('_updated_by', 'string').editable(false).label('Updated by')
  ]);
  admin.addEntity(user);
  tableMenu.addChild(nga.menu(user).icon(null));
  return admin;
}
if (typeof module !== 'undefined')
  module.exports = skygearCMSConfig;

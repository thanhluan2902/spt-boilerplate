<?php
/**
 * SPT software - Layout html
 * 
 * @project: https://github.com/smpleader/spt-boilerplate
 * @author: Pham Minh - smpleader
 * @description: Display a layout
 * 
 */

use SPT\Lang;
use SPT\Config;

echo '<h3>'. Lang::_('Default page'). '</h3>';
echo Lang::_('This is a simple HTMPL Page.') ;
echo '<a href="'. $this->router->url(Config::get('siteSubpath')).'">'. Lang::_('Back home') .'</a>';
<?php
/**
 * SPT software - homeController
 * 
 * @project: https://github.com/smpleader/spt-boilerplate
 * @author: Pham Minh - smpleader
 * @description: Just a basic controller
 * 
 */

namespace App\controllers;

defined( 'APP_PATH' ) or die('');

use App\libraries\Core\Controller;

class HomeController extends Controller 
{
    public function test()
    {
        $this->app->set('format', 'ajax');
        $this->set('vars', 123456);
    }
    
    public function ajaxTest()
    {
        $this->set('vars', 0);
    }

    public function show()
    {
        $this->app->set('layout', 'home');
    }

    public function default()
    {
        $this->app->set('layout', 'default');
    }

    public function debug()
    {
        $this->app->set('format', '');
        $this->set('vars', 'debug shown');
    }
}

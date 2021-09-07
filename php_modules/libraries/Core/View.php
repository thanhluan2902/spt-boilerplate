<?php
/**
 * SPT software - Application
 * 
 * @project: https://github.com/smpleader/spt-boilerplate
 * @author: Pham Minh - smpleader
 * @description: Create a dump view
 * 
 */

namespace App\libraries\Core; 

use Joomla\DI\Container;

class View
{
    protected $helper;
    protected $router;

    public function __construct(Container $container)
    {
        //$this->helper = $container->get('helper');
        $this->router = $container->get('router');
    }

    public function render($file_layout, $_data)
    {
        ob_start();
        include $file_layout;
        $content = ob_get_clean();
        return $content;
    }
}
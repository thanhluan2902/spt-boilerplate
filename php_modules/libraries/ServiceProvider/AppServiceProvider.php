<?php
/**
 * SPT software - Application
 * 
 * @project: https://github.com/smpleader/spt-boilerplate
 * @author: Pham Minh - smpleader
 * @description: Base abstract implement Container
 * 
 */

namespace App\libraries\ServiceProvider; 

use Joomla\DI\Container;
use Joomla\DI\ServiceProviderInterface; 
use App\libraries\Core\Application;

class AppServiceProvider implements ServiceProviderInterface
{
    private $classes = [
        'libraries\Core' => [
            'View' => [
                'alias' => 'view'
            ],
            'SimpleSession' => [
                'alias' => 'session'
            ]
        ],
        'controllers' => [
            'HomeController'
        ],
        'models' => [
            
        ]
    ];

    public function boot(Container $container)
    {
        foreach($this->classes as $namespace => $objects)
        {
            // TODO: support inner folders
            $namespace = "\App\\$namespace";
            foreach($objects as $kobj => $obj)
            {
                $class = $obj;
                $alias = $obj;
                if( is_array($obj) )
                {
                    $class = $kobj;
                    $alias = $obj['alias'];
                }

                $class = $namespace. '\\'. $class;
                if(!class_exists($class))
                {
                    throw new \RuntimeException('Invalid Class '.$class, 500);
                }

                $container->share( $class, new $class($container), true);
                $container->alias( $alias, $class);
            }
        }

        // TODO: boot from plugins
    }

    public function register(Container $container)
    {
        $this->boot($container);

        $container->share(
            'App\libraries\Core\Application',
            new Application($container),
            true
        );

        $container->alias('app', 'App\libraries\Core\Application');
    }
}
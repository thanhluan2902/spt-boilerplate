<?php
/**
 * SPT software - Demo application
 * 
 * @project: https://github.com/smpleader/spt-boilerplate
 * @author: Pham Minh - smpleader
 * @description: How we setup a website with Di container
 * 
 */

define('PUBLIC_PATH', __DIR__ . '/');
define('APP_PATH', __DIR__ . '/../php_modules/');

require APP_PATH.'/../vendor/autoload.php';

use App\libraries\Starter;

$config = require_once APP_PATH.'/config.php';

Starter::load()->boot($config)->run();
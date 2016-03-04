<?php


// ** MySQL settings ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp_starter');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

define('AUTH_KEY',         '[v:@RHfpgF`N2L2n`Ku`+RdExT&z`rEB]5z+|zjSDAh8<C0_l.pRYYE=hex,* _%');
define('SECURE_AUTH_KEY',  'ND|tl&+*cu%w}o@Ckkt(K3_AJ,+[qc.|_tMDE8yMM0kz|=fu8]iVY!|Q5JxU-68l');
define('LOGGED_IN_KEY',    '4]L3|N*z]>m[erM<.e;483:X{|-|U#n<Y0j+`h0IOM:=aKhYIUd SD)gux&Igre9');
define('NONCE_KEY',        '`kr/5^n1aL$;E<g |YOU$Y4=jJe3Jv+odBbrlZ?a$#BDRmZ5]@v`?D-H?].%TgTc');
define('AUTH_SALT',        '^xl&d6Q`MK|fR,zeT6]_*-E@;-%73U|c+UrD~HYep12QK<~K^PQ<SvJjnyOs+Zz_');
define('SECURE_AUTH_SALT', 'M8xv!sBC$QcS3[x W]k8N&ix|auAh!]}:Vs0n(6f&rB3mz_9~-HYZ3`Ut(sDl=>6');
define('LOGGED_IN_SALT',   '{EX-?*nj;s{Z0hE},]OHJ{V:ERY{ax?w@0<-o3q r/-M1UkxUa)BYpH&=hOpN+?%');
define('NONCE_SALT',       'RW?D>.60d<HX|Yu.r>`3h,seDk`*V~#ZT`]2^1?uIl^Tju|+B*rj4Tb:.sRoa<fd');


$table_prefix = 'nd_';


define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_HOME', 'http://localhost:8001');
define('WP_SITEURL','http://localhost:8001/wp');



/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

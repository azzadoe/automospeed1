<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'automospeed1_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '97.8w^mIc?ya3IniaVuZ3q<g:4c7s>I9aE.)wK}DsdW$(B&7E!eOA&8G`Y6e?>c ' );
define( 'SECURE_AUTH_KEY',  '=LZfGgA#0w0#|#ozq+T3t9i $-~R[siBh6O$~p8g&Kh4HbFJ-9P=rrkbpe-}Ej(;' );
define( 'LOGGED_IN_KEY',    'n6OpM&E]Vus#U 6<tr@c>.gSCh}]Ay$1FXx72{Rr/3.N&`9&$F,$LqW-c|nb+xMF' );
define( 'NONCE_KEY',        '.Cw@YPvfQ11`8}}@t;t;#2 _KKMk#obPENKxL*0zG-dX>[YDC7`6 @4RVoN60j.k' );
define( 'AUTH_SALT',        '#6W?Is:YZ/%<?5t,dK<xFxbG[$$~J=_C&<Ii*I^A$s~Ct7-[mQwvz!f$@M(+12>m' );
define( 'SECURE_AUTH_SALT', '7%4b(Xt@nz%,;H~oj|*nH]_C|; } qfhBn<G^:jDO2ii/qu3K+)&d{|V=y={@d8l' );
define( 'LOGGED_IN_SALT',   '%G7|YOI[mi;0*JWG3!/1[DR{u |L08hM-3JEp+Izk90(]O(yq:C%zV!5H7o60qj8' );
define( 'NONCE_SALT',       'LZQr%n:lCj~0nE?tu_Z0uFA;N;bL fK<#Kj>~/k~zt{hQzR1N;UZsG&1=Kl}nF[<' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

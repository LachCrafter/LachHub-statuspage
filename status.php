<?php
$minecraftServerIP = "lachcrafter.de";
$minecraftServerPort = "25565";

$fp = @fsockopen($minecraftServerIP, $minecraftServerPort, $errno, $errstr, 1);

if ($fp) {
    fclose ($fp);
    echo json_encode(['serverStatus' => 'Online']);
} else {
    echo json_encode(['serverStatus' => 'Offline']);
}
?>
current_epoch=$(date +%s)
target_epoch=$(date -d "tomorrow 00:00" +%s)

sleep_seconds=$(( $target_epoch - $current_epoch ))

echo sleep $sleep_seconds sec

sleep $sleep_seconds
current_epoch=$(date +%s)
target_epoch=$(TZ=JST-9 date -d "tomorrow 00:15" +%s)

sleep_seconds=$(( $target_epoch - $current_epoch ))

echo sleep $sleep_seconds sec

sleep $sleep_seconds
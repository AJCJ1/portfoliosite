require 'localtunnel'

tunnel = Localtunnel::Client.start(local_port: 3000)
puts "Tunnel URL: #{tunnel.url}"

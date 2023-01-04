class PagesController < ApplicationController
  def home
    @qr_code = RQRCode::QRCode.new("https://www.arnoldcjones.co.uk")
    @qr_as_svg = @qr_code.as_svg(
      offset: 0,
      shape_rendering: 'crispEdges',
      standalone: true,
      color: "96C3F6",
      viewbox: true
    )
  end
end

class SearchesController < ApplicationController
  require "httpclient"
  def search
    # グルメサーチAPI
    client = HTTPClient.new
    query = {
      key: ENV["GOURMET_API_KEY"],
      lat: params[:lat],
      lng: params[:lng],
      range: params[:range],
      format: "json"
    }
    response = client.get(ENV["URI"], query)
    res_json = JSON.parse(response.body)
    @shops = res_json["results"]["shop"]
  end
end

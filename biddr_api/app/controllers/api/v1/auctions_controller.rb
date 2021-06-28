class Api::V1::AuctionsController < Api::ApplicationController
    before_action :find_auction, only: [:show, :destroy]
    before_action :authenticate_user!, only:[:create, :destroy]
    def index
        auctions = Auction.order created_at: :desc
        render json: auctions, each_serializer:AuctionSerializer
    end

    def show
        render json: @auction
    end
   
    def create
        auction = Auction.new auction_params
        auction.user = current_user
        if auction.save
            render json:{id: auction.id}
        else
            render(json: {errors: auction.errors},
                status: 422 )
        end
    end

    def destroy
        if @auction.destroy
            head :ok
        else
            head :bad_request
        end
    end

    private

        def find_auction
            @auction = Auction.find params[:id]
        end

        def auction_params
            params.require(:auction).permit(:title, :description, :end_date, :reserve_price)
        end
end

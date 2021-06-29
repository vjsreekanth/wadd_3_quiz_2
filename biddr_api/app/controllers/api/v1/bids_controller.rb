class Api::V1::BidsController < Api::ApplicationController
  before_action :authenticate_user!, only:[:create]
    def create
        @auction = Auction.find params[:auction_id]
        bid= Bid.new bid_params
        bid.auction = @auction
        bid.user = current_user
        if bid.save
            render json:{id: bid.id}
        #   redirect_to auction_path(@auction)
        else 
            render(json: {errors: bid.errors},
                status: 422 )
        #   render "auction/show"
        end
      end
      
    #   def destroy
    #     @bid= Bid.find params[:id]
    #     # if can?(:crud, @bid)
    #       @bid.destroy
    #       head :ok
    #     else
    #       # head will send an empty HTTP response with a particular response code
    #       # :unauthorized code is 401
    #       head :bad_request
    #     end
    #   end
    
      private
    
      def bid_params
        params.require(:bid).permit(:bid_price)
      end

end

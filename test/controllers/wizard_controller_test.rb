require 'test_helper'

class WizardControllerTest < ActionController::TestCase
  test "should get steps" do
    get :steps
    assert_response :success
  end

end

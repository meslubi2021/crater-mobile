import {INavigation, ITheme} from '@/interfaces';

export interface IProps {
  /**
   * A navigator is an object of navigation functions that a view can call.
   * @see INavigation
   */
  navigation: INavigation;

  /**
   * Dispatch change action.
   */
  dispatch: (fun: object) => void;

  /**
   * OnSubmit handler.
   * It will run validation, both sync and async, and, if the form is valid, it will call this.props.onSubmit(data) with the contents of the form data.
   */
  handleSubmit: (fun: object) => void;

  /**
   * An active theme object.
   * @see ITheme
   */
  theme: ITheme;

  /**
   * Gets form data.
   */
  formValues: any;

  /**
   * The loading indicator for updating preferences.
   */
  isSaving: boolean;
}

export interface IStates {
  /**
   * The loading indicator for the screen, displayed until the screen is ready to be displayed.
   */
  isFetchingInitialData: Boolean;
}

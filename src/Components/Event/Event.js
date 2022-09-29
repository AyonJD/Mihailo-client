import React from 'react';
import { useForm } from 'react-hook-form';
import './Event.css'

const Event = () => {
    const { register, formState: { errors }, handleSubmit, trigger, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div>
            <h1 className='create_event_header'>Create Event</h1>
            <div class="formbold-main-wrapper">
                <div class="formbold-form-wrapper">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="formbold-mb-5 formbold--mx-3">
                            <label for="event_name" class="formbold-form-label"> Event Name </label>
                            <input
                                type="text"
                                name="event_name"
                                id="event_name"
                                placeholder="Event Name"
                                class="formbold-form-input"

                                {...register("event_name", {
                                    required: true,
                                    minLength: {
                                        value: 3, message: 'Minimum 3 character required'
                                    }
                                })}

                                onKeyUp={() => {
                                    trigger('event_name')
                                }}
                            />
                        </div>
                        <div class="formbold-mb-5 formbold--mx-3">
                            <label for="host_name" class="formbold-form-label"> Host Name </label>
                            <input
                                type="text"
                                name="host_name"
                                id="host_name"
                                placeholder="Host Name"
                                class="formbold-form-input"

                                {...register("host_name", {
                                    required: true,
                                    minLength: {
                                        value: 3, message: 'Minimum 3 character required'
                                    }
                                })}

                                onKeyUp={() => {
                                    trigger('host_name')
                                }}
                            />
                        </div>
                        <div class="flex event_time formbold--mx-3">
                            <div class="w-half small_w_half formbold-px-3">
                                <div class="formbold-mb-5">
                                    <label for="starting_date" class="formbold-form-label">Starting Date </label>
                                    <input
                                        type="date"
                                        name="starting_date"
                                        id="starting_date"
                                        class="formbold-form-input"

                                        {...register("starting_date", {
                                            required: true,
                                            message: 'Starting Date is required'
                                        })}

                                        onKeyUp={() => {
                                            trigger('starting_date')
                                        }}
                                    />
                                </div>
                            </div>
                            <div class="w-half small_w_half formbold-px-3">
                                <div class="formbold-mb-5">
                                    <label for="starting_time" class="formbold-form-label">Starting Time </label>
                                    <input
                                        type="time"
                                        name="starting_time"
                                        id="starting_time"
                                        class="formbold-form-input formbold-time"

                                        {...register("starting_time", {
                                            required: true,
                                            message: 'Starting Time is required'
                                        })}

                                        onKeyUp={() => {
                                            trigger('starting_time')
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="flex justify_between event_time formbold--mx-3">
                            <div class="w-half small_w_half formbold-px-3">
                                <div class="formbold-mb-5">
                                    <label for="ending_date" class="formbold-form-label">Ending Date </label>
                                    <input
                                        type="date"
                                        name="ending_date"
                                        id="ending_date"
                                        class="formbold-form-input"

                                        {...register("ending_date", {
                                            required: true,
                                            message: 'Ending Date is required'
                                        })}

                                        onKeyUp={() => {
                                            trigger('ending_date')
                                        }}
                                    />
                                </div>
                            </div>
                            <div class="w-half small_w_half formbold-px-3">
                                <div class="formbold-mb-5">
                                    <label for="ending_time" class="formbold-form-label">Ending Time </label>
                                    <input
                                        type="time"
                                        name="ending_time"
                                        id="ending_time"
                                        class="formbold-form-input formbold-time"

                                        {...register("ending_time", {
                                            required: true,
                                            message: 'Ending Time is required'
                                        })}

                                        onKeyUp={() => {
                                            trigger('ending_time')
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="formbold-mb-5 formbold-pt-3">
                            <label class="formbold-form-label formbold-form-label-2">
                                Location Details
                            </label>
                            <div class=" location_section justify_between formbold--mx-3">
                                <div className='w-full small_w_half'>
                                    <div class=" formbold-px-3">
                                        <div class="formbold-mb-5">
                                            <input
                                                type="text"
                                                name="area"
                                                id="area"
                                                placeholder="Enter area"
                                                class="formbold-form-input handle_width"

                                                {...register("area", {
                                                    required: true,
                                                    minLength: {
                                                        value: 2, message: 'Minimum 2 character required'
                                                    }
                                                })}

                                                onKeyUp={() => {
                                                    trigger('area')
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div class=" formbold-px-3">
                                        <div class="formbold-mb-5">
                                            <input
                                                type="text"
                                                name="city"
                                                id="city"
                                                placeholder="Enter city"
                                                class="formbold-form-input handle_width"

                                                {...register("city", {
                                                    required: true,
                                                    minLength: {
                                                        value: 2, message: 'Minimum 2 character required'
                                                    }
                                                })}

                                                onKeyUp={() => {
                                                    trigger('city')
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full small_w_half formbold-time'>
                                    <div class=" formbold-px-3">
                                        <div class="formbold-mb-5 w-half">
                                            <input
                                                type="text"
                                                name="state"
                                                id="state"
                                                placeholder="Enter state"
                                                class="formbold-form-input handle_width"

                                                {...register("state", {
                                                    required: true,
                                                    minLength: {
                                                        value: 2, message: 'Minimum 2 character required'
                                                    }
                                                })}

                                                onKeyUp={() => {
                                                    trigger('state')
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div class="w-half formbold-px-3">
                                        <div class="formbold-mb-5">
                                            <input
                                                type="text"
                                                name="post-code"
                                                id="post-code"
                                                placeholder="Post Code"
                                                class="formbold-form-input handle_width"

                                                {...register("post-code", {
                                                    required: true,
                                                    minLength: {
                                                        value: 4, message: 'Minimum 4 character required'
                                                    }
                                                })}

                                                onKeyUp={() => {
                                                    trigger('post-code')
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="formbold-mb-5 formbold--mx-3">
                            <label for="event_image" class="formbold-form-label"> Event Image </label>
                            <input
                                type="file"
                                name="event_image"
                                id="event_image"
                                placeholder="Event Image"
                                class="formbold-form-input event_image"

                                {...register("event_image", {
                                    required: true,
                                    message: 'Event Image is required'
                                })}

                                onKeyUp={() => {
                                    trigger('event_image')
                                }}
                            />
                        </div>

                        <div>
                            <button type='submit' class="formbold-btn">Create Event</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Event;